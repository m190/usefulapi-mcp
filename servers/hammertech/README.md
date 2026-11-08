# HammerTech MCP by usefulapi

Use your [HammerTech](https://www.hammertech.com) account from Claude, Cursor, or any MCP client. Read projects, inspections, issues, incidents, permits and site sign-ins, read-only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://hammertech.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://hammertech.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http hammertech https://hammertech.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=hammertech&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fhammertech.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "hammertech": {
      "url": "https://hammertech.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your HammerTech credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/hammertech/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **HammerTech tenant** (the part before .hammertechonline.com), a **Region** (au, us or eu), and a **HammerTech API key** (My Account → API Keys, created by a company admin). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `hammertech_list_projects` | read | List projects |
| `hammertech_list_locations` | read | List locations |
| `hammertech_list_attendees` | read | List inspection attendees |
| `hammertech_list_inspections` | read | List inspections |
| `hammertech_list_observations` | read | List inspection observations |
| `hammertech_list_issues` | read | List issues |
| `hammertech_list_incidents` | read | List incident reports |
| `hammertech_list_injuries` | read | List injury records |
| `hammertech_list_permits` | read | List permits |
| `hammertech_list_site_sign_ins` | read | List site sign-ins |
| `hammertech_usage_status` | meta | Usage status (free-tier meter) |
| `hammertech_request_feature` | meta | Request a missing feature |
| `hammertech_upgrade` | meta | Upgrade to Pro or Pro+ |
| `hammertech_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `hammertech_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `hammertech_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `hammertech_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
