# SugarWOD MCP by usefulapi

Use your [SugarWOD](https://www.sugarwod.com) account from Claude, Cursor, or any MCP client. Read a gym's athletes, workouts, scores and benchmark library, and change an athlete's name or email. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://sugarwod.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sugarwod.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sugarwod https://sugarwod.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sugarwod&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsugarwod.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sugarwod": {
      "url": "https://sugarwod.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SugarWOD credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sugarwod/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **SugarWOD API key** (the gym owner creates it at `/gyms/settings/developer-keys`). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sugarwod_get_box` | read | Get the gym |
| `sugarwod_get_account_owner` | read | Get the account owner |
| `sugarwod_list_athletes` | read | List athletes |
| `sugarwod_get_athlete` | read | Get an athlete |
| `sugarwod_find_athlete_by_email` | read | Find an athlete by email |
| `sugarwod_update_athlete` | **write** | Update an athlete |
| `sugarwod_list_tracks` | read | List tracks |
| `sugarwod_list_workouts` | read | List workouts |
| `sugarwod_get_workout` | read | Get a workout |
| `sugarwod_list_workout_athletes` | read | List athletes who logged a workout |
| `sugarwod_list_benchmarks_by_category` | read | List benchmark workouts |
| `sugarwod_get_benchmark` | read | Get a benchmark workout |
| `sugarwod_list_movements` | read | List movements |
| `sugarwod_get_movement` | read | Get a movement |
| `sugarwod_get_barbell_lift` | read | Get a barbell lift |
| `sugarwod_usage_status` | meta | Usage status (free-tier meter) |
| `sugarwod_request_feature` | meta | Request a missing feature |
| `sugarwod_upgrade` | meta | Upgrade to Pro or Pro+ |
| `sugarwod_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sugarwod_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sugarwod_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sugarwod_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
