# Wise MCP by usefulapi

Use your [Wise](https://wise.live) account from Claude, Cursor, or any MCP client. It reads one institute's teachers, students, parents, participants, tags, locations and generated reports. It is read only. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://wise-tutoring.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://wise-tutoring.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http wise-tutoring https://wise-tutoring.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=wise-tutoring&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwise-tutoring.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "wise-tutoring": {
      "url": "https://wise-tutoring.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Wise credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/wise-tutoring/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Wise User ID**, your **Wise API key**, your **Institute ID** and your **Namespace** (the institute subdomain). Turn on API access in Wise under **Settings → Developer options**. The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `wisetutoring_get_user` | read | Get the connected user |
| `wisetutoring_get_institute` | read | Get the institute |
| `wisetutoring_list_locations` | read | List locations |
| `wisetutoring_list_tags` | read | List tags |
| `wisetutoring_list_teachers` | read | List teachers |
| `wisetutoring_list_students` | read | List students |
| `wisetutoring_get_participant` | read | Get a participant |
| `wisetutoring_list_parents` | read | List parents |
| `wisetutoring_get_parent` | read | Get a parent |
| `wisetutoring_list_reports` | read | List reports |
| `wisetutoring_get_report` | read | Get a report |
| `wisetutoring_usage_status` | meta | Usage status (free-tier meter) |
| `wisetutoring_request_feature` | meta | Request a missing feature |
| `wisetutoring_upgrade` | meta | Upgrade to Pro or Pro+ |
| `wisetutoring_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `wisetutoring_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `wisetutoring_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `wisetutoring_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
