# Contrato de API
## Canciones
 
| Método  | Referencia         | Propósito                                     |
| ------- |:-----------------: |:---------------------------------------------:|
| GET     | urlbase/songs      | Devuelve todas las canciones                  |
| GET     | urlbase/songs/name | Devuelve la canción con ese nombre            |
| POST    | urlbase/songs      | Agrega una canción en el body en formato Json |
| DELETE  | urlbase/songs/name | Elimina una canción si existe                 |
| PUT     | urlbase/songs/name | Modifica una canción                          |

## Usuarios

| Método  | Referencia         | Propósito                                     |
| ------- |:-----------------: |:---------------------------------------------:|
| GET     | urlbase/users      | Devuelve todos los usuarios                   |
| GET     | urlbase/users/name | Devuelve el usuario con ese nombre            |
| POST    | urlbase/users      | Agrega un usuario en el body en formato Json  |
| DELETE  | urlbase/users/name | Elimina el usuario si existe                  |
| PUT     | urlbase/users/name | Modifica un usuario                           |

## Canciones favoritas

| Método  | Referencia         | Propósito                                     |
| ------- |:-----------------: |:---------------------------------------------:|
| POST    | urlbase/users/songs| Agrega una canción favorita al usuario        |
| DELETE  | urlbase/users/songs| Elimina una canción de favoritos del usuario  |

### Formato Json

`{
 "name": "example name",
 "album": "example album",
 "duration": “example duration”,
"artist": "example artist",
},`

