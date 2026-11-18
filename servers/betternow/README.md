# BetterNow MCP by usefulapi

Use your [BetterNow](https://www.betternow.org) account from Claude, Cursor, or any MCP client. Read fundraisers, donations, projects, events and teams, and create fundraisers and teams. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://betternow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://betternow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http betternow https://betternow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=betternow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbetternow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "betternow": {
      "url": "https://betternow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your BetterNow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/betternow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client ID and client secret** of your BetterNow charity application, and an optional **anchor** such as charity:42. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `betternow_get_organisation` | read | Get an organisation |
| `betternow_list_organisation_projects` | read | List an organisation's projects |
| `betternow_list_organisation_fundraisers` | read | List an organisation's fundraisers |
| `betternow_list_organisation_donations` | read | List an organisation's donations |
| `betternow_get_project` | read | Get a project |
| `betternow_list_project_fundraisers` | read | List a project's fundraisers |
| `betternow_list_events` | read | List events |
| `betternow_get_event` | read | Get an event |
| `betternow_list_sites` | read | List sites |
| `betternow_list_fundraisers` | read | List fundraisers |
| `betternow_get_fundraiser` | read | Get a fundraiser |
| `betternow_list_fundraiser_donations` | read | List a fundraiser's donations |
| `betternow_list_fundraiser_updates` | read | List a fundraiser's updates |
| `betternow_get_donation` | read | Get a donation |
| `betternow_get_donation_details` | read | Get private donation details |
| `betternow_get_person` | read | Get a person |
| `betternow_list_person_donations` | read | List a person's donations |
| `betternow_list_teams` | read | List teams |
| `betternow_get_team` | read | Get a team |
| `betternow_list_team_fundraisers` | read | List a team's fundraisers |
| `betternow_create_fundraiser` | **write** | Create a fundraiser |
| `betternow_create_team` | **write** | Create a team |
| `betternow_add_fundraiser_to_team` | **write** | Add a fundraiser to a team |
| `betternow_remove_fundraiser_from_team` | **write** | Remove a fundraiser from its team |
| `betternow_usage_status` | meta | Usage status (free-tier meter) |
| `betternow_request_feature` | meta | Request a missing feature |
| `betternow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `betternow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `betternow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `betternow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `betternow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
