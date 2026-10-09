# EmailOctopus MCP by usefulapi

Manage [EmailOctopus](https://emailoctopus.com) from Claude, Cursor, or any MCP client — manage lists, contacts and campaigns, and read campaign performance reports. Hosted, no local install: connect with your EmailOctopus API token.

**Live endpoint:** `https://emailoctopus.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://emailoctopus.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http emailoctopus https://emailoctopus.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=emailoctopus&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Femailoctopus.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "emailoctopus": {
      "url": "https://emailoctopus.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your EmailOctopus credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/emailoctopus/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **EmailOctopus API token** (EmailOctopus → Account → Integrations & API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `emailoctopus_list_lists` | read | List lists |
| `emailoctopus_get_list` | read | Get list |
| `emailoctopus_list_contacts` | read | List contacts |
| `emailoctopus_get_contact` | read | Get contact |
| `emailoctopus_list_campaigns` | read | List campaigns |
| `emailoctopus_get_campaign` | read | Get campaign |
| `emailoctopus_get_campaign_report` | read | Get campaign report |
| `emailoctopus_get_campaign_links_report` | read | Get campaign links report |
| `emailoctopus_create_list` | **write** | Create list |
| `emailoctopus_update_list` | **write** | Update list |
| `emailoctopus_create_contact` | **write** | Create contact |
| `emailoctopus_update_contact` | **write** | Update contact |
| `emailoctopus_delete_contact` | **write** | Delete contact |
| `emailoctopus_usage_status` | meta | Usage status (free-tier meter) |
| `emailoctopus_upgrade` | meta | Upgrade to Pro (unlimited) |
| `emailoctopus_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `emailoctopus_upgrade` (it returns a Stripe Checkout link). Cancel any time with `emailoctopus_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `emailoctopus_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
