# Findymail MCP by usefulapi

Use your [Findymail](https://www.findymail.com) account from Claude, Cursor, or any MCP client. Find work emails and phone numbers, verify addresses, run lead searches, and read credits and intent signals. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://findymail.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://findymail.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http findymail https://findymail.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=findymail&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffindymail.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "findymail": {
      "url": "https://findymail.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Findymail credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/findymail/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Findymail API key** (Findymail → **API** page in your dashboard). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `findymail_get_credits` | read | Get remaining credits |
| `findymail_get_usage` | read | Get credit usage |
| `findymail_list_contact_lists` | read | List contact lists |
| `findymail_list_contacts` | read | List saved contacts |
| `findymail_list_exclusion_lists` | read | List exclusion lists |
| `findymail_list_excluded_domains` | read | List excluded domains |
| `findymail_list_signal_monitors` | read | List signal monitors |
| `findymail_list_signals` | read | List intent signals |
| `findymail_get_signal` | read | Get an intent signal |
| `findymail_get_intellimatch_status` | read | Get Intellimatch search status |
| `findymail_get_intellimatch_results` | read | Get Intellimatch search results |
| `findymail_find_email_by_name` | **write** | Find an email from a name |
| `findymail_verify_email` | **write** | Verify an email address |
| `findymail_find_phone` | **write** | Find a phone number |
| `findymail_find_employees` | **write** | Find employees at a company |
| `findymail_get_company` | **write** | Get company information |
| `findymail_reverse_email_lookup` | **write** | Find a business profile from an email |
| `findymail_search_leads` | **write** | Start an Intellimatch lead search |
| `findymail_create_contact_list` | **write** | Create a contact list |
| `findymail_add_excluded_domains` | **write** | Add excluded domains |
| `findymail_usage_status` | meta | Usage status (free-tier meter) |
| `findymail_request_feature` | meta | Request a missing feature |
| `findymail_upgrade` | meta | Upgrade to Pro or Pro+ |
| `findymail_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `findymail_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `findymail_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `findymail_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
