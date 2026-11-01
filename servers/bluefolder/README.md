# BlueFolder MCP by usefulapi

Use your [BlueFolder](https://bluefolder.com) account from Claude, Cursor, or any MCP client. Read customers, equipment, service requests and contracts, and add service requests and comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bluefolder.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bluefolder.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bluefolder https://bluefolder.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bluefolder&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbluefolder.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bluefolder": {
      "url": "https://bluefolder.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BlueFolder credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bluefolder/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **BlueFolder API token** (BlueFolder → Settings → API, in the Authorized API Users table; API access needs a Premium plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bluefolder_list_customers` | read | List customers |
| `bluefolder_get_customer` | read | Get a customer |
| `bluefolder_list_service_requests` | read | List service requests |
| `bluefolder_get_service_request` | read | Get a service request |
| `bluefolder_get_service_request_history` | read | Get service request history |
| `bluefolder_list_equipment` | read | List equipment |
| `bluefolder_get_equipment` | read | Get equipment |
| `bluefolder_list_contracts` | read | List contracts |
| `bluefolder_get_contract` | read | Get a contract |
| `bluefolder_list_items` | read | List items |
| `bluefolder_get_item` | read | Get an item |
| `bluefolder_list_users` | read | List users |
| `bluefolder_get_user` | read | Get a user |
| `bluefolder_list_tax_codes` | read | List tax codes |
| `bluefolder_add_service_request` | **write** | Create a service request |
| `bluefolder_add_service_request_comment` | **write** | Add a service request comment |
| `bluefolder_add_customer_comment` | **write** | Add a customer comment |
| `bluefolder_usage_status` | meta | Usage status (free-tier meter) |
| `bluefolder_request_feature` | meta | Request a missing feature |
| `bluefolder_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `bluefolder_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `bluefolder_upgrade` (it returns a Stripe Checkout link). Cancel any time with `bluefolder_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `bluefolder_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
