# Beebole MCP by usefulapi

Use your [Beebole](https://www.beebole.com) account from Claude, Cursor, or any MCP client. Read people, projects, tasks, tags and time records, log time, and correct the duration or comment of a time record. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://beebole.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://beebole.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http beebole https://beebole.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=beebole&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbeebole.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "beebole": {
      "url": "https://beebole.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Beebole credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/beebole/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your personal **Beebole API key** (your initials → Your API key → Create an API key) and your **region** (Europe or America). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `beebole_current_person` | read | Current person |
| `beebole_list_people` | read | List people |
| `beebole_list_projects` | read | List projects |
| `beebole_list_tasks` | read | List tasks |
| `beebole_list_tags` | read | List tags |
| `beebole_list_time_records` | read | List time records |
| `beebole_log_time` | **write** | Log time |
| `beebole_update_time_record_duration` | **write** | Change time record duration |
| `beebole_update_time_record_comment` | **write** | Change time record comment |
| `beebole_usage_status` | meta | Usage status (free-tier meter) |
| `beebole_request_feature` | meta | Request a missing feature |
| `beebole_upgrade` | meta | Upgrade to Pro or Pro+ |
| `beebole_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `beebole_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `beebole_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `beebole_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
