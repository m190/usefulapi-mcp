---
title: Check RunCloud servers, web apps and backups in Claude
description: Ask Claude or ChatGPT to check your RunCloud servers: running services, web apps with their PHP settings and SSL status, and your backups.
date: 2026-11-20
products: runcloud
---
You can ask Claude or ChatGPT to check your RunCloud servers. The AI lists your servers, shows which services run on each server, lists the web applications, reads their PHP settings and SSL status, and checks your backups. Add `https://runcloud.usefulapi.io/mcp` as a connector, then ask in plain words.

## Which prompt do I start with?

> Check my RunCloud servers. Are all services running? List each web app with its PHP version, SSL status and backups.

You can also name one server or one web app, or ask about memory, disk space and load.

## What does the AI do, step by step?

1. It lists your servers with `runcloud_list_servers`. Each server shows its provider, IP address, operating system, stack and online state.
2. For each server, it lists the services with `runcloud_list_services`, for example nginx, PHP-FPM, MariaDB and Redis. Each service shows its running state, CPU, memory and version.
3. It lists the web applications of each server with `runcloud_list_webapps`. Each web app shows its PHP version, stack and type, for example WordPress. A page has 20 items by default and at most 40. If more exist, the AI must call again for the next page.
4. For one web app, it reads the PHP and FPM/Nginx settings with `runcloud_get_webapp_settings`: memory and upload limits, timezone and process manager. `runcloud_get_ssl_method` shows if the web app uses basic SSL (one certificate for the web app) or advanced SSL (one per domain), and its AutoSSL status. For basic SSL, `runcloud_get_webapp_ssl` reads the certificate: provider, validity and HTTPS settings. No tool reads the separate certificates of advanced SSL. `runcloud_list_domains` lists the domain names of the web app.
5. It lists the backups with `runcloud_list_backups`. Each backup shows what it covers (web app or database), the storage, the frequency, the size and the status. `runcloud_list_backup_snapshots` shows the run date and the status of each snapshot of one backup.
6. If you ask about load, it reads the latest health sample with `runcloud_get_server_health` (memory, disk space and load average) and the hardware with `runcloud_get_server_hardware`. If you ask what changed, it reads the activity logs with `runcloud_list_server_logs` and `runcloud_list_webapp_logs`.

The server never returns SSL private keys or deployment webhook keys. RunCloud data calls that succeed count toward your plan. The server tries to refund a failed call.

## Can it restart a service or change my server?

The check above uses read tools only. The server has no tool made to delete a server, a web app, a database or a backup. But a deployment script or a cron job runs its own commands, and these commands can delete data.

The server has seven tools that act on your server: `runcloud_control_service` (start, restart or reload one service; stop is not offered), `runcloud_deploy_git`, `runcloud_force_deploy_atomic`, `runcloud_run_cronjob`, `runcloud_reload_supervisor`, `runcloud_renew_ssl` and `runcloud_install_letsencrypt_ssl`. They act when they are called; they do not enforce a separate preview step. If you choose **Read only** when you connect, the server hides these tools and refuses calls to them. Your AI client can ask you to approve each tool call; this depends on the client and its settings.

The UsefulAPI account tools are separate. `runcloud_usage_status` shows your usage and plan. `runcloud_upgrade` gives plan options or a payment link; a change from Pro to Pro+ requires confirmation. `runcloud_cancel_subscription` also requires confirmation and ends the subscription at the end of the current period. `runcloud_request_feature` sends us a feature request. These tools do not change RunCloud data.

## What do I need?

A RunCloud API key. You create it in RunCloud under **Workspace → Settings → API Management**. The RunCloud API is available on the Business and Enterprise plans. Leave the IP restriction of the key empty: the requests come from Cloudflare addresses, so a key limited to your own IP address is refused.

See the [RunCloud setup steps](/runcloud/) for Claude, ChatGPT, Cursor and other MCP clients.
