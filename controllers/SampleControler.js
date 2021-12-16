const knexConfig = require('../db/knexfile');

//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV])


/**
 * This function allows you to retrieve the users list 
 * @param  {Object} request Express request object - No arguments needed
 * @param  {Object} response Express response object - return the list of users
 * 
 */
const getUsers = (request, response) => {
  knex('users')
    .select({
      id: 'id',
      name: 'name',
      email: 'email'
    })
    .then((users) => {
      response.status(200).json(users);
    })
    .catch((err) => {
      console.error(err);
      response.status(501).json({success: false, message: 'An error occurred, please try again later.'});
    })
}

/**
 * This function allows you to retrieve one user 
 * @param  {Object} request Express request object - get user id from request.params.id
 * @param  {Object} response Express response object - return the user
 * 
 */
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  knex('users')
    .select({
      id: 'id',
      name: 'name',
      email: 'email'
    })
    .where({
      id: id
    })
    .then((users) => {
      response.status(200).json(users[0]);
    })
    .catch((err) => {
      console.error(err);
      response.status(501).json({success: false, message: 'An error occurred, please try again later.'});
    })
}

/**
 * This function allows you to create a user 
 * @param  {Object} request Express request object - get { name, email } from request.body
 * @param  {Object} response Express response object - return status of request
 * 
 */
const createUser = (request, response) => {
  const { name, email } = request.body

  console.log(request.body);

  knex('users')
    .insert( {name: name, email: email} )
    .returning('id')
    .then((id) => {
      response.status(201).send(`User added with id ${id}`)
    })
    .catch((err) => {
      console.error(err);
      response.status(501).json({success: false, message: 'An error occurred, please try again later.'});
    })
}

/**
 * This function allows you to update a user 
 * @param  {Object} request Express request object - get { name, email } from request.body and id from request.params.id
 * @param  {Object} response Express response object - return status of request
 * 
 */
const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  knex('users')
    .update({
      name: name,
      email: email
    })
    .where({
      id: id
    })
    .then((users) => {
      response.status(200).json(`User modified with ID: ${id}`);
    })
    .catch((err) => {
      console.error(err);
      response.status(501).json({success: false, message: 'An error occurred, please try again later.'});
    })
}

/**
 * This function allows you to delete a user 
 * @param  {Object} request Express request object - get id from request.params.id
 * @param  {Object} response Express response object - return status of request
 * 
 */
const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  knex('users')
    .delete()
    .where({
      id: id
    })
    .then((users) => {
      response.status(200).json(`User deleted with ID: ${id}`);
    })
    .catch((err) => {
      console.error(err);
      response.status(501).json({success: false, message: 'An error occurred, please try again later.'});
    })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}