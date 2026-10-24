# SpinupWP MCP by usefulapi

Use [SpinupWP](https://spinupwp.com) from Claude, Cursor, or any MCP client — servers, sites, domains and events, plus cache purges, service restarts and git deploys.
Hosted, no local install: connect with your own SpinupWP credentials.

**Live endpoint:** `https://spinupwp.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/spinupwp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://spinupwp.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http spinupwp https://spinupwp.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spinupwp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspinupwp.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "spinupwp": {
      "url": "https://spinupwp.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SpinupWP credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/spinupwp/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `spinupwp_list_servers` | read | List servers |
| `spinupwp_get_server` | read | Get server |
| `spinupwp_list_sites` | read | List sites |
| `spinupwp_get_site` | read | Get site |
| `spinupwp_list_site_domains` | read | List site domains |
| `spinupwp_list_site_path_redirects` | read | List site path redirects |
| `spinupwp_list_events` | read | List events |
| `spinupwp_get_event` | read | Get event |
| `spinupwp_list_storage_providers` | read | List backup storage providers |
| `spinupwp_list_team_ssh_keys` | read | List team SSH keys |
| `spinupwp_purge_page_cache` | **write** | Purge page cache |
| `spinupwp_purge_object_cache` | **write** | Purge object cache |
| `spinupwp_correct_file_permissions` | **write** | Correct file permissions |
| `spinupwp_deploy_site_git` | **write** | Run site git deploy |
| `spinupwp_restart_nginx` | **write** | Restart nginx |
| `spinupwp_restart_php` | **write** | Restart php |
| `spinupwp_restart_mysql` | **write** | Restart mysql |
| `spinupwp_restart_redis` | **write** | Restart redis |
| `spinupwp_reboot_server` | **write** | Reboot server |
| `spinupwp_usage_status` | meta | Usage status (free-tier meter) |
| `spinupwp_request_feature` | meta | Request a missing feature |
| `spinupwp_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `spinupwp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `spinupwp_upgrade` (it returns a Stripe Checkout link). Cancel any time with `spinupwp_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `spinupwp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by SpinupWP.
