# Contrato de API
## Canciones
 
| Método  | Referencia        | Propósito                                     |
| ------- |:-----------------:| ---------------------------------------------:|
| GET     | urlbse/songs      | Devuelve todas las canciones                  |
| GET     | urlbse/songs/name | Devuelve la canción con ese nombre            |
| POST    | urlbse/songs      | Agrega una canción en el body en formato Json |
| DELETE  | urlbse/songs/name | Elimina una canción si existe                 |
| PUT     | urlbse/songs/name | Modifica una canción                          |

## Usuarios

| Método  | Referencia        | Propósito                                     |
| ------- |:-----------------:| ---------------------------------------------:|
| GET     | urlbse/users      | Devuelve todos los usuarios                   |
| GET     | urlbse/users/name | Devuelve la canción con ese nombre            |
| POST    | urlbse/users      | Agrega un usuario en el body en formato Json  |
| DELETE  | urlbse/users/name | Elimina el usuario si existe                  |
| PUT     | urlbse/users/name | Modifica un usuario                           |

## Canciones favoritas

| Método  | Referencia        | Propósito                                     |
| ------- |:-----------------:| ---------------------------------------------:|
| POST    | urlbse/users/songs| Agrega una canción favorita al usuario                 |
| DELETE  | urlbse/users/songs| Elimina una canción de favoritos del usuario           |

