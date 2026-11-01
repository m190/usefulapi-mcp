# Cezanne HR MCP by usefulapi

Use your [Cezanne HR](https://cezannehr.com) account from Claude, Cursor, or any MCP client. It reads people, employments, org units, absence events, timesheets and allowed tables, and it makes no writes. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cezanne-hr.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cezanne-hr.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cezanne-hr https://cezanne-hr.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cezanne-hr&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcezanne-hr.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cezanne-hr": {
      "url": "https://cezanne-hr.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cezanne HR credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cezanne-hr/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **client ID** and **client secret** of an Authorised Application (in Cezanne HR under Administration, Security Settings, Authorised Applications, with Read permission). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cezannehr_list_people` | read | List people |
| `cezannehr_get_person` | read | Get person |
| `cezannehr_get_current_employment` | read | Get current primary employment |
| `cezannehr_list_org_units` | read | List org units |
| `cezannehr_list_absence_events` | read | List absence events |
| `cezannehr_list_timesheets` | read | List timesheets |
| `cezannehr_read_table` | read | Read a table |
| `cezannehr_usage_status` | meta | Usage status (free-tier meter) |
| `cezannehr_request_feature` | meta | Request a missing feature |
| `cezannehr_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `cezannehr_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cezannehr_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cezannehr_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cezannehr_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
