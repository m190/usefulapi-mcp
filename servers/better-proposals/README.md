# Better Proposals MCP by usefulapi

Use your [Better Proposals](https://www.betterproposals.io) account from Claude, Cursor, or any MCP client. Read proposals, templates, companies, quotes and Content Library items, and create or edit proposals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://better-proposals.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://better-proposals.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http better-proposals https://better-proposals.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=better-proposals&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbetter-proposals.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "better-proposals": {
      "url": "https://better-proposals.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Better Proposals credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/better-proposals/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Better Proposals API token** (API key generator → Generate API Key; needs a Premium or Enterprise plan). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `betterproposals_list_proposals` | read | List proposals |
| `betterproposals_get_proposal_count` | read | Count proposals |
| `betterproposals_get_proposal` | read | Get a proposal |
| `betterproposals_list_templates` | read | List templates |
| `betterproposals_get_template` | read | Get a template |
| `betterproposals_list_companies` | read | List companies |
| `betterproposals_get_company` | read | Get a company |
| `betterproposals_list_currencies` | read | List currencies |
| `betterproposals_get_currency` | read | Get a currency |
| `betterproposals_list_document_types` | read | List document types |
| `betterproposals_list_quotes` | read | List quotes |
| `betterproposals_get_quote` | read | Get a quote |
| `betterproposals_get_settings` | read | Get account settings |
| `betterproposals_get_brand_settings` | read | Get brand settings |
| `betterproposals_list_merge_tags` | read | List merge tags |
| `betterproposals_list_library_items` | read | List content library items |
| `betterproposals_get_library_item` | read | Get a content library item |
| `betterproposals_create_proposal` | **write** | Create a proposal |
| `betterproposals_edit_proposal` | **write** | Edit a proposal |
| `betterproposals_usage_status` | meta | Usage status (free-tier meter) |
| `betterproposals_request_feature` | meta | Request a missing feature |
| `betterproposals_upgrade` | meta | Upgrade to Pro or Pro+ |
| `betterproposals_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `betterproposals_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `betterproposals_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `betterproposals_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
