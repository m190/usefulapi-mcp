# Protime MCP by usefulapi

Use your [Protime](https://www.protime.eu) account from Claude, Cursor, or any MCP client. Read clockings, absences, assignments, contracts, people, departments, jobs and shift definitions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://protime.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://protime.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http protime https://protime.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=protime&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fprotime.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "protime": {
      "url": "https://protime.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Protime credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/protime/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **tenant name**, the **environment** and the **client ID** and **client secret** that Protime issued for your tenant. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `protime_list_clockings` | read | List clockings |
| `protime_list_absences` | read | List absences |
| `protime_list_assignments` | read | List assignments |
| `protime_list_contracts` | read | List contracts |
| `protime_list_people` | read | List people |
| `protime_list_departments` | read | List departments |
| `protime_list_jobs` | read | List jobs |
| `protime_list_work_locations` | read | List work locations |
| `protime_list_shift_definitions` | read | List shift definitions (codes and names) |
| `protime_list_absence_definitions` | read | List absence definitions (codes, groups) |
| `protime_list_absence_groups` | read | List absence groups |
| `protime_get_person` | read | Get person |
| `protime_usage_status` | meta | Usage status (free-tier meter) |
| `protime_request_feature` | meta | Request a missing feature |
| `protime_upgrade` | meta | Upgrade to Pro or Pro+ |
| `protime_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `protime_upgrade` (it returns a Stripe Checkout link). Cancel any time with `protime_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `protime_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
