# YOS Cloud = Mac (paridad de accesos)

Objetivo: trabajar **fuera de casa** con el agente en la nube con los mismos permisos/herramientas que en local.

## Estado actual
- Este agent run: **sin environment guardado** (`environment: null`).
- Sin secrets → no Higgsfield, no Hostinger, no Prefijo localhost.

## Qué clonar (tú metes secrets; yo opero)

En Cursor Dashboard → Cloud Agents → **Secrets** (preferible **Personal** o Runtime Secret):

| Secret | Para qué |
|--------|----------|
| `HIGGSFIELD_API_KEY` o token/sesión | Generar con Soul ID Gonzalo |
| `HIGGSFIELD_SOUL_ID_GONZALO` | Identity lock del avatar |
| `HOSTINGER_FTP_HOST` | Publicar Quick-Looks |
| `HOSTINGER_FTP_USER` | |
| `HOSTINGER_FTP_PASS` | Runtime Secret |
| `HOSTINGER_PUBLIC_URL` | URL base para ver en el teléfono |
| (opcional) `GOOGLE_*` | Drive/backup si aplica |
| (opcional) `YOS_BACKUP_*` | servidor secreto semanal |

## Pasos (orden)
1. Crear/abrir **Environment** en Cursor para este repo.
2. Pegar secrets arriba (no en el chat, en Dashboard).
3. Snapshot o `environment.json` con CLI/tools (higgsfield, lftp/rclone).
4. **Nuevo** Cloud Agent con ese environment (este run viejo no hereda secrets solos).
5. Yo verifico: `echo $HIGGSFIELD_SOUL_ID_GONZALO` (o redacted) + ping Higgsfield/Hostinger.

## Regla
Código y skills viven en git. **Credenciales solo en Secrets**, nunca en el repo.
