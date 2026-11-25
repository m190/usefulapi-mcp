# Bridgit MCP by usefulapi

Use your [Bridgit](https://gobridgit.com) account from Claude, Cursor, or any MCP client. Read people, availability, allocations, projects, open roles, time off, certifications and phases; it cannot change data. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://bridgit.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://bridgit.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http bridgit https://bridgit.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=bridgit&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbridgit.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "bridgit": {
      "url": "https://bridgit.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Bridgit credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/bridgit/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **Service account username (Unique Identifier)**, the **Service account password** and the **Bridgit account id** (numeric, for example 12345). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `bridgit_list_accounts` | read | List accounts |
| `bridgit_list_people` | read | List people |
| `bridgit_get_person` | read | Get a person |
| `bridgit_get_person_allocations` | read | Get a person's allocations |
| `bridgit_get_person_availability` | read | Get person availability |
| `bridgit_list_unavailabilities` | read | List unavailabilities |
| `bridgit_list_projects` | read | List projects |
| `bridgit_list_person_projects` | read | List projects per person |
| `bridgit_list_roles` | read | List roles |
| `bridgit_list_person_certifications` | read | List person certifications |
| `bridgit_list_users` | read | List users |
| `bridgit_list_phases` | read | List phases |
| `bridgit_usage_status` | meta | Usage status (free-tier meter) |
| `bridgit_request_feature` | meta | Request a missing feature |
| `bridgit_upgrade` | meta | Upgrade to Pro or Pro+ |
| `bridgit_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `bridgit_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `bridgit_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `bridgit_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
