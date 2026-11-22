# Holdsport (SportMember) MCP by usefulapi

Use your [Holdsport](https://www.holdsport.dk) account from Claude, Cursor, or any MCP client. Read teams, members, notes and activities, and set your own attendance. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://holdsport.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://holdsport.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http holdsport https://holdsport.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=holdsport&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fholdsport.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "holdsport": {
      "url": "https://holdsport.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Holdsport (SportMember) credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/holdsport/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **SportMember username** and **SportMember password**, the same login you use on SportMember or Holdsport. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `holdsport_get_user_profile` | read | Get user profile |
| `holdsport_list_admin_profiles` | read | List administered profiles |
| `holdsport_list_teams` | read | List teams |
| `holdsport_list_team_members` | read | List team members |
| `holdsport_get_team_member` | read | Get team member |
| `holdsport_list_team_notes` | read | List team notes |
| `holdsport_list_team_activities` | read | List team activities |
| `holdsport_get_activity` | read | Get activity |
| `holdsport_list_activity_attendees` | read | List activity attendees |
| `holdsport_list_activity_tasks` | read | List activity tasks |
| `holdsport_set_activity_status` | **write** | Set my status on an activity |
| `holdsport_usage_status` | meta | Usage status (free-tier meter) |
| `holdsport_request_feature` | meta | Request a missing feature |
| `holdsport_upgrade` | meta | Upgrade to Pro or Pro+ |
| `holdsport_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `holdsport_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `holdsport_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `holdsport_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
