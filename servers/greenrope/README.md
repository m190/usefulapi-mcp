# GreenRope MCP by usefulapi

Use your [GreenRope](https://www.greenrope.com) account from Claude, Cursor, or any MCP client. It reads contacts, groups and CRM activities, and adds contacts, group memberships and CRM activities without sending mail. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://greenrope.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://greenrope.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http greenrope https://greenrope.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=greenrope&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgreenrope.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "greenrope": {
      "url": "https://greenrope.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your GreenRope credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/greenrope/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **GreenRope sign-in email** and **GreenRope password** you use to sign in, and the numeric **GreenRope account ID** of that account. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `greenrope_list_contacts` | read | List contacts |
| `greenrope_search_contacts` | read | Search contacts |
| `greenrope_get_contact_groups` | read | Get a contact's groups |
| `greenrope_list_groups` | read | List groups |
| `greenrope_list_user_defined_fields` | read | List user-defined fields |
| `greenrope_list_crm_activity_types` | read | List CRM activity types |
| `greenrope_list_crm_activities` | read | List CRM activities |
| `greenrope_add_contacts` | **write** | Add contacts |
| `greenrope_add_contacts_to_group` | **write** | Add contacts to a group |
| `greenrope_add_crm_activity` | **write** | Add a CRM activity |
| `greenrope_usage_status` | meta | Usage status (free-tier meter) |
| `greenrope_request_feature` | meta | Request a missing feature |
| `greenrope_upgrade` | meta | Upgrade to Pro or Pro+ |
| `greenrope_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `greenrope_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `greenrope_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `greenrope_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
