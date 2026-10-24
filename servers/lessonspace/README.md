# Lessonspace MCP by usefulapi

Use [Lessonspace](https://www.thelessonspace.com) from Claude, Cursor, or any MCP client — tutoring sessions with their recordings and transcripts, spaces and their sessions, and users, plus launching a space (returns a join link for a real participant) and updating a session.
Hosted, no local install: connect with your own Lessonspace credentials.

**Live endpoint:** `https://lessonspace.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/lessonspace

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://lessonspace.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http lessonspace https://lessonspace.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=lessonspace&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flessonspace.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "lessonspace": {
      "url": "https://lessonspace.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Lessonspace credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/lessonspace/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `lessonspace_list_sessions` | read | List sessions |
| `lessonspace_get_session` | read | Get session |
| `lessonspace_get_session_recording` | read | Get session recording URL |
| `lessonspace_get_session_transcript` | read | Get session transcript URL |
| `lessonspace_update_session` | **write** | Rename session / set recording access |
| `lessonspace_list_spaces` | read | List spaces |
| `lessonspace_list_space_sessions` | read | List sessions of a space |
| `lessonspace_launch_space` | **write** | Launch a space (create a join link) |
| `lessonspace_list_users` | read | List users |
| `lessonspace_usage_status` | meta | Usage status (free-tier meter) |
| `lessonspace_request_feature` | meta | Request a missing feature |
| `lessonspace_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `lessonspace_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `lessonspace_upgrade` (it returns a Stripe Checkout link). Cancel any time with `lessonspace_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `lessonspace_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Lessonspace.
