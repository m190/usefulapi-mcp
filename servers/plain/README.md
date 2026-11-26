# Plain MCP by usefulapi

Use your [Plain](https://www.plain.com) account from Claude, Cursor, or any MCP client. Read support threads, customers, labels and users, and add internal notes, labels, assignments and priority. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://plain.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://plain.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http plain https://plain.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=plain&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fplain.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "plain": {
      "url": "https://plain.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Plain credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/plain/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Plain machine-user API key** (Settings → Machine users & agents). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `plain_get_workspace` | read | Get workspace |
| `plain_list_threads` | read | List threads |
| `plain_get_thread` | read | Get thread |
| `plain_get_customer` | read | Get customer |
| `plain_list_label_types` | read | List label types |
| `plain_list_users` | read | List assignable users |
| `plain_add_note` | **write** | Add internal note |
| `plain_add_labels` | **write** | Add labels to thread |
| `plain_remove_labels` | **write** | Remove labels from thread |
| `plain_assign_thread` | **write** | Assign thread |
| `plain_unassign_thread` | **write** | Unassign thread |
| `plain_set_thread_priority` | **write** | Set thread priority |
| `plain_mark_thread_done` | **write** | Mark thread done |
| `plain_reopen_thread` | **write** | Reopen thread (mark todo) |
| `plain_usage_status` | meta | Usage status (free-tier meter) |
| `plain_request_feature` | meta | Request a missing feature |
| `plain_upgrade` | meta | Upgrade to Pro or Pro+ |
| `plain_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `plain_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `plain_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `plain_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
