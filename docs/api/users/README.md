# User Management API

The user management API contains resources for provisioning and managing users to the SafePlaces application.

All the following endpoints are protected and only accessible to authenticated super administrators.

## Resources

- <code><a href="get.md">POST /auth/users/get</a></code>
- <code><a href="list.md">POST /auth/users/list</a></code>
- <code><a href="create.md">POST /auth/users/create</a></code>
- <code><a href="delete.md">POST /auth/users/delete</a></code>
- <code><a href="assign-role.md">POST /auth/users/assign-role</a></code>
- <code><a href="reset-password.md">POST /auth/users/reset-password</a></code>
- <code><a href="reset-mfa.md">POST /auth/users/reset-mfa</a></code>

* <code><a href="reflect.md">GET /auth/users/reflect</a></code>

## General Errors

See [User Management Errors](errors.md) for some general
errors that can occur when accessing the user management endpoints.

---

[Home](../../README.md) › [SafePlaces Information Security API](../README.md)
› User Management API
