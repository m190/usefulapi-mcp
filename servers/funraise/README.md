# Funraise MCP by usefulapi

Use [Funraise](https://www.funraise.com) from Claude, Cursor, or any MCP client — work with your supporters, donations, recurring gifts, campaign sites, notes and tasks. Hosted, no local install: connect with your own Funraise credentials.

**Live endpoint:** `https://funraise.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/funraise

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://funraise.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http funraise https://funraise.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=funraise&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffunraise.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "funraise": {
      "url": "https://funraise.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Funraise credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/funraise/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your **Funraise API key** (Funraise → Settings → API Keys). They are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `funraise_list_supporters` | read | List supporters |
| `funraise_get_supporter` | read | Get supporter |
| `funraise_list_donations` | read | List donations |
| `funraise_get_donation` | read | Get donation |
| `funraise_list_subscriptions` | read | List recurring subscriptions |
| `funraise_get_subscription` | read | Get recurring subscription |
| `funraise_list_forms` | read | List forms |
| `funraise_list_campaign_sites` | read | List campaign sites |
| `funraise_get_campaign_site` | read | Get campaign site |
| `funraise_list_form_custom_questions` | read | List form custom questions |
| `funraise_get_household` | read | Get household |
| `funraise_get_household_member` | read | Get household of a supporter |
| `funraise_list_household_addresses` | read | List household addresses |
| `funraise_list_supporter_addresses` | read | List supporter addresses |
| `funraise_get_address` | read | Get address |
| `funraise_list_supporter_notes` | read | List supporter notes |
| `funraise_list_household_notes` | read | List household notes |
| `funraise_get_note` | read | Get note |
| `funraise_list_supporter_interactions` | read | List supporter interactions |
| `funraise_list_user_interactions` | read | List interactions assigned to a user |
| `funraise_get_interaction` | read | Get interaction |
| `funraise_get_task` | read | Get task |
| `funraise_create_supporter_note` | **write** | Add a note to a supporter |
| `funraise_create_household_note` | **write** | Add a note to a household |
| `funraise_create_interaction` | **write** | Log an interaction |
| `funraise_create_task` | **write** | Create a task |
| `funraise_complete_task` | **write** | Complete a task |
| `funraise_create_supporter` | **write** | Create a supporter |
| `funraise_usage_status` | meta | Usage status (free-tier meter) |
| `funraise_request_feature` | meta | Request a missing feature |
| `funraise_upgrade` | meta | Upgrade to Pro or Pro+ |
| `funraise_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per API key) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `funraise_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `funraise_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `funraise_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
