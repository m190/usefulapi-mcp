# NextAgency MCP by usefulapi

Use your [NextAgency](https://nextbroker.io) account from Claude, Cursor, or any MCP client. Read cases, contacts, tasks, notes, benefits and employees, and add cases, notes and tasks. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://nextagency.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nextagency.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nextagency https://nextagency.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nextagency&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnextagency.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nextagency": {
      "url": "https://nextagency.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and you enter your own NextAgency app's client ID and secret, then sign in with your NextAgency account.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nextagency/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **NextAgency address** (the part before `.nextbroker.io`), then you sign in to NextAgency and approve access. Your agency administrator must first enable the API under **Settings → Integrations → API**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nextagency_get_profile` | read | Get my profile |
| `nextagency_list_users` | read | List users |
| `nextagency_list_cases` | read | List cases |
| `nextagency_search_cases` | read | Search cases |
| `nextagency_get_case` | read | Get a case |
| `nextagency_list_case_contacts` | read | List a case's contacts |
| `nextagency_list_case_employees` | read | List a case's employees |
| `nextagency_list_case_custom_fields` | read | List a case's custom fields |
| `nextagency_list_case_benefits` | read | List a case's benefits |
| `nextagency_list_case_tasks` | read | List a case's tasks |
| `nextagency_get_case_task` | read | Get a case task |
| `nextagency_list_case_notes` | read | List a case's notes |
| `nextagency_get_case_note` | read | Get a case note |
| `nextagency_list_contacts` | read | List contacts |
| `nextagency_search_contacts` | read | Search contacts |
| `nextagency_find_contacts_by_phone` | read | Find contacts by phone number |
| `nextagency_get_contact` | read | Get a contact |
| `nextagency_list_carriers` | read | List carriers |
| `nextagency_list_sub_agents` | read | List sub-agents |
| `nextagency_create_case` | **write** | Create a case |
| `nextagency_create_case_note` | **write** | Add a case note |
| `nextagency_create_case_task` | **write** | Add a case task |
| `nextagency_usage_status` | meta | Usage status (free-tier meter) |
| `nextagency_request_feature` | meta | Request a missing feature |
| `nextagency_upgrade` | meta | Upgrade to Pro or Pro+ |
| `nextagency_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `nextagency_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `nextagency_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `nextagency_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
