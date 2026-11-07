# CharityFundraiser MCP by usefulapi

Use your [CharityFundraiser](https://charityfundraiser.com) account from Claude, Cursor, or any MCP client. It reads donations, transactions, contacts and events, and it creates or updates contacts. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://charityfundraiser.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://charityfundraiser.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http charityfundraiser https://charityfundraiser.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=charityfundraiser&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcharityfundraiser.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "charityfundraiser": {
      "url": "https://charityfundraiser.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CharityFundraiser credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/charityfundraiser/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **CharityFundraiser API key** (`cf_live_...`, created under Integrations → Developer API). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `charityfundraiser_get_account` | read | Check the API key and organization |
| `charityfundraiser_list_donations` | read | List donations |
| `charityfundraiser_list_transactions` | read | List payment transactions |
| `charityfundraiser_list_contacts` | read | List or search contacts |
| `charityfundraiser_list_events` | read | List events |
| `charityfundraiser_upsert_contact` | **write** | Create or update a contact |
| `charityfundraiser_update_contact` | **write** | Update a contact |
| `charityfundraiser_usage_status` | meta | Usage status (free-tier meter) |
| `charityfundraiser_request_feature` | meta | Request a missing feature |
| `charityfundraiser_upgrade` | meta | Upgrade to Pro or Pro+ |
| `charityfundraiser_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `charityfundraiser_upgrade` (it returns a Stripe Checkout link). Cancel any time with `charityfundraiser_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `charityfundraiser_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
