# HDPhotoHub MCP by usefulapi

Use your [HDPhotoHub](https://www.hdphotohub.com) account from Claude, Cursor, or any MCP client. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hdphotohub.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hdphotohub.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hdphotohub https://hdphotohub.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hdphotohub&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhdphotohub.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hdphotohub": {
      "url": "https://hdphotohub.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HDPhotoHub credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hdphotohub/

<!-- connect:end (generated above, edit below) -->

On first connect you paste your HDPhotoHub **business API key** (Business → Webhooks & API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hdphotohub_get_brand` | read | Get brand |
| `hdphotohub_list_users` | read | List users |
| `hdphotohub_get_user` | read | Get a user |
| `hdphotohub_list_user_transactions` | read | List user transactions |
| `hdphotohub_list_sites` | read | List sites |
| `hdphotohub_get_site` | read | Get a site |
| `hdphotohub_get_media` | read | Get a media item |
| `hdphotohub_list_orders` | read | List orders |
| `hdphotohub_get_order` | read | Get an order |
| `hdphotohub_list_groups` | read | List groups |
| `hdphotohub_get_group` | read | Get a group |
| `hdphotohub_list_webhooks` | read | List webhooks |
| `hdphotohub_get_webhook` | read | Get a webhook |
| `hdphotohub_list_webhook_events` | read | List webhook events |
| `hdphotohub_create_site` | **write** | Create a site |
| `hdphotohub_update_site` | **write** | Update a site |
| `hdphotohub_set_site_status` | **write** | Set site status |
| `hdphotohub_set_site_media_order` | **write** | Set media order |
| `hdphotohub_update_media` | **write** | Update a media item |
| `hdphotohub_upsert_user` | **write** | Create or update a user |
| `hdphotohub_usage_status` | meta | Usage status (free-tier meter) |
| `hdphotohub_request_feature` | meta | Request a missing feature |
| `hdphotohub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hdphotohub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hdphotohub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hdphotohub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hdphotohub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
