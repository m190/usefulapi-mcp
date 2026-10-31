# Galaxy Digital MCP by usefulapi

Use your [Galaxy Digital](https://www.galaxydigital.com) account from Claude, Cursor, or any MCP client. It can read volunteer needs, sign-ups, logged hours, users, agencies, teams, qualifications and events. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://galaxy-digital.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://galaxy-digital.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http galaxy-digital https://galaxy-digital.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=galaxy-digital&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgalaxy-digital.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "galaxy-digital": {
      "url": "https://galaxy-digital.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Galaxy Digital credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/galaxy-digital/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Site API key**, the **API user email and password**, and the **region** of your site (US 1, US 2 or Canada). Galaxy Digital support issues the site key. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `galaxydigital_list_events` | read | List events |
| `galaxydigital_list_agencies` | read | List agencies |
| `galaxydigital_list_needs` | read | List volunteer needs |
| `galaxydigital_list_responses` | read | List responses |
| `galaxydigital_list_hours` | read | List volunteer hours |
| `galaxydigital_list_users` | read | List users |
| `galaxydigital_list_teams` | read | List teams |
| `galaxydigital_list_qualifications` | read | List qualifications |
| `galaxydigital_list_benchmarks` | read | List benchmarks |
| `galaxydigital_get_event` | read | Get an event |
| `galaxydigital_get_agency` | read | Get an agency |
| `galaxydigital_get_need` | read | Get a volunteer need |
| `galaxydigital_get_response` | read | Get a response |
| `galaxydigital_get_hour` | read | Get a logged hour record |
| `galaxydigital_get_user` | read | Get a user |
| `galaxydigital_get_team` | read | Get a team |
| `galaxydigital_get_qualification` | read | Get a qualification |
| `galaxydigital_get_benchmark` | read | Get a benchmark |
| `galaxydigital_list_need_responses` | read | List responses of a need |
| `galaxydigital_list_need_questions` | read | List questions of a need |
| `galaxydigital_list_agency_managers` | read | List managers of an agency |
| `galaxydigital_list_user_agencies` | read | List agencies a user follows |
| `galaxydigital_list_qualification_users` | read | List users with a qualification |
| `galaxydigital_list_benchmark_users` | read | List users with a benchmark |
| `galaxydigital_list_causes` | read | List causes |
| `galaxydigital_list_interests` | read | List interests |
| `galaxydigital_list_impact_areas` | read | List impact areas |
| `galaxydigital_list_clusters` | read | List clusters |
| `galaxydigital_list_registration_questions` | read | List registration questions |
| `galaxydigital_usage_status` | meta | Usage status (free-tier meter) |
| `galaxydigital_request_feature` | meta | Request a missing feature |
| `galaxydigital_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `galaxydigital_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `galaxydigital_upgrade` (it returns a Stripe Checkout link). Cancel any time with `galaxydigital_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `galaxydigital_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
