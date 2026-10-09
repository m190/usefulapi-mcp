# Tailscale MCP by usefulapi

Use your [Tailscale](https://tailscale.com) account from Claude, Cursor, or any MCP client — read devices, users, keys, ACLs and DNS for a tailnet, and manage devices, routes and auth keys. Hosted,
no local install: connect with your own credentials.

**Live endpoint:** `https://tailscale.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://tailscale.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http tailscale https://tailscale.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=tailscale&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftailscale.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "tailscale": {
      "url": "https://tailscale.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Tailscale credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/tailscale/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Tailscale API access token** (admin console → Settings → Keys), optionally scoped to a tailnet. It is validated, stored per-user, and scoped to you — no
keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `tailscale_list_devices` | read | List devices |
| `tailscale_get_device` | read | Get device |
| `tailscale_list_device_routes` | read | List device routes |
| `tailscale_list_keys` | read | List keys |
| `tailscale_get_key` | read | Get key |
| `tailscale_get_policy_file` | read | Get policy file |
| `tailscale_list_dns_nameservers` | read | List DNS nameservers |
| `tailscale_get_dns_preferences` | read | Get DNS preferences |
| `tailscale_list_dns_searchpaths` | read | List DNS search paths |
| `tailscale_get_split_dns` | read | Get split DNS |
| `tailscale_list_users` | read | List users |
| `tailscale_get_user` | read | Get user |
| `tailscale_list_webhooks` | read | List webhooks |
| `tailscale_get_tailnet_settings` | read | Get tailnet settings |
| `tailscale_authorize_device` | **write** | Authorize device |
| `tailscale_set_device_name` | **write** | Set device name |
| `tailscale_set_device_tags` | **write** | Set device tags |
| `tailscale_expire_device_key` | **write** | Expire device key |
| `tailscale_set_device_routes` | **write** | Set device routes |
| `tailscale_create_auth_key` | **write** | Create auth key |
| `tailscale_delete_key` | **write** | Delete key |
| `tailscale_delete_device` | **write** | Delete device |
| `tailscale_usage_status` | meta | Usage status (free-tier meter) |
| `tailscale_upgrade` | meta | Upgrade to Pro (unlimited) |
| `tailscale_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `tailscale_upgrade` (it returns a Stripe Checkout link). Cancel any time with `tailscale_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `tailscale_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
