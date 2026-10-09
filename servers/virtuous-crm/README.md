# Virtuous MCP by usefulapi

Use [Virtuous](https://virtuous.org) from Claude, Cursor, or any MCP client — search donors, read contacts, giving history, notes, tags, projects and events, run queries, and log notes, tags, contacts and gifts.
Hosted, no local install: connect with your own Virtuous credentials.

**Live endpoint:** `https://virtuous-crm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/virtuous-crm

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://virtuous-crm.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http virtuous-crm https://virtuous-crm.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=virtuous-crm&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fvirtuous-crm.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "virtuous-crm": {
      "url": "https://virtuous-crm.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Virtuous credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/virtuous-crm/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Virtuous API key** (Settings → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `virtuous_get_current_organization` | read | Get the current organization |
| `virtuous_search` | read | Global search |
| `virtuous_search_contacts` | read | Search contacts |
| `virtuous_get_contact` | read | Get a contact |
| `virtuous_find_contact` | read | Find a contact by email or reference |
| `virtuous_list_contact_individuals` | read | List a contact's individuals |
| `virtuous_list_contact_notes` | read | List a contact's notes |
| `virtuous_list_contact_tags` | read | List a contact's tags |
| `virtuous_list_contact_gifts` | read | List a contact's gifts |
| `virtuous_get_gift` | read | Get a gift |
| `virtuous_list_tags` | read | List tags |
| `virtuous_search_projects` | read | Search projects |
| `virtuous_get_project` | read | Get a project |
| `virtuous_list_events` | read | List events |
| `virtuous_get_query_options` | read | Get query options |
| `virtuous_query` | read | Query records |
| `virtuous_create_contact_note` | **write** | Log a note on a contact |
| `virtuous_add_contact_tag` | **write** | Tag a contact |
| `virtuous_create_contact_transaction` | **write** | Submit a contact for import |
| `virtuous_create_gift_transaction` | **write** | Submit a gift for import |
| `virtuous_usage_status` | meta | Usage status (free-tier meter) |
| `virtuous_request_feature` | meta | Request a missing feature |
| `virtuous_upgrade` | meta | Upgrade to Pro (unlimited) |
| `virtuous_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `virtuous_upgrade` (it returns a Stripe Checkout link). Cancel any time with `virtuous_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `virtuous_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Virtuous.
