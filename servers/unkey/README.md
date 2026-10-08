# Unkey MCP by usefulapi

Manage API keys, identities, permissions, rate-limit overrides and verification analytics. Hosted, no local install.

**Live endpoint:** `https://unkey.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://unkey.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http unkey https://unkey.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=unkey&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Funkey.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "unkey": {
      "url": "https://unkey.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/unkey/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Unkey credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `unkey_liveness` | read | Check API health |
| `unkey_get_key` | read | Get one key by id |
| `unkey_whoami_key` | read | Look up a key by its secret |
| `unkey_get_api` | read | Get one API |
| `unkey_list_api_keys` | read | List the keys of an API |
| `unkey_list_identities` | read | List identities |
| `unkey_get_identity` | read | Get one identity |
| `unkey_list_permissions` | read | List permissions |
| `unkey_list_roles` | read | List roles |
| `unkey_list_ratelimit_overrides` | read | List rate-limit overrides |
| `unkey_get_ratelimit_override` | read | Get one rate-limit override |
| `unkey_query_verification_analytics` | read | Query key-verification analytics |
| `unkey_create_api` | **write** | Create an API |
| `unkey_create_key` | **write** | Create an API key |
| `unkey_update_key` | **write** | Update a key |
| `unkey_update_key_credits` | **write** | Update a key's credits |
| `unkey_delete_key` | **write** | Delete a key |
| `unkey_create_identity` | **write** | Create an identity |
| `unkey_set_ratelimit_override` | **write** | Set a rate-limit override |
| `unkey_usage_status` | meta | Usage status (free-tier meter) |
| `unkey_upgrade` | meta | Upgrade to Pro (unlimited) |
| `unkey_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `unkey_upgrade` (it returns a Stripe Checkout link). Cancel any time with `unkey_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `unkey_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
