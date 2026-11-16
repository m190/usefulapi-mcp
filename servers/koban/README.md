# Koban MCP by usefulapi

Use your [Koban](https://app-koban.com) account from Claude, Cursor, or any MCP client. Read accounts, contacts, leads, deals and actions, create or update accounts and contacts, and add actions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://koban.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://koban.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http koban https://koban.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=koban&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fkoban.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "koban": {
      "url": "https://koban.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Koban credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/koban/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Koban API key** and a **Koban user login key**, both found in Koban under Parameters → API. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `koban_list_users` | read | List users |
| `koban_search_accounts` | read | Search accounts |
| `koban_get_account` | read | Get an account |
| `koban_get_account_by_external_code` | read | Get an account by external code |
| `koban_list_updated_accounts` | read | List updated accounts |
| `koban_find_contact_by_email` | read | Find a contact by email |
| `koban_get_contact` | read | Get a contact |
| `koban_list_updated_contacts` | read | List updated contacts |
| `koban_get_lead` | read | Get a lead |
| `koban_list_leads_by_status` | read | List leads by status |
| `koban_get_deal` | read | Get a deal |
| `koban_list_deals_for_account` | read | List deals for an account |
| `koban_list_updated_deals` | read | List updated deals |
| `koban_get_invoice` | read | Get an invoice |
| `koban_list_updated_invoices` | read | List updated invoices |
| `koban_list_updated_orders` | read | List updated orders |
| `koban_get_action` | read | Get an action |
| `koban_list_pending_actions` | read | List pending actions |
| `koban_upsert_account` | **write** | Create or update an account |
| `koban_upsert_contact` | **write** | Create or update a contact |
| `koban_create_action` | **write** | Create an action |
| `koban_usage_status` | meta | Usage status (free-tier meter) |
| `koban_request_feature` | meta | Request a missing feature |
| `koban_upgrade` | meta | Upgrade to Pro or Pro+ |
| `koban_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `koban_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `koban_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `koban_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
