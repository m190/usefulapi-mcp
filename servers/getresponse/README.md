# GetResponse MCP by usefulapi

Manage GetResponse contacts, campaigns, newsletters and autoresponders. Hosted, no local install.

**Live endpoint:** `https://getresponse.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://getresponse.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http getresponse https://getresponse.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=getresponse&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgetresponse.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "getresponse": {
      "url": "https://getresponse.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/getresponse/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **GetResponse credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `getresponse_get_account` | read | Get account |
| `getresponse_list_campaigns` | read | List campaigns (lists) |
| `getresponse_get_campaign` | read | Get campaign (list) |
| `getresponse_list_contacts` | read | List contacts |
| `getresponse_get_contact` | read | Get contact |
| `getresponse_list_newsletters` | read | List newsletters |
| `getresponse_get_newsletter` | read | Get newsletter |
| `getresponse_list_autoresponders` | read | List autoresponders |
| `getresponse_list_tags` | read | List tags |
| `getresponse_list_custom_fields` | read | List custom fields |
| `getresponse_list_from_fields` | read | List from-fields |
| `getresponse_create_contact` | **write** | Create contact |
| `getresponse_update_contact` | **write** | Update contact |
| `getresponse_delete_contact` | **write** | Delete contact |
| `getresponse_usage_status` | meta | Usage status (free-tier meter) |
| `getresponse_upgrade` | meta | Upgrade to Pro (unlimited) |
| `getresponse_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `getresponse_upgrade` (it returns a Stripe Checkout link). Cancel any time with `getresponse_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `getresponse_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
