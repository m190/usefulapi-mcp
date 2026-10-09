# Speechmatics MCP by usefulapi

Transcribe audio and video with speaker diarization, translation, and summarization from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Speechmatics API key.

**Live endpoint:** `https://speechmatics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/speechmatics

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://speechmatics.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http speechmatics https://speechmatics.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=speechmatics&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fspeechmatics.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "speechmatics": {
      "url": "https://speechmatics.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Speechmatics credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/speechmatics/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Speechmatics API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `speechmatics_list_jobs` | read | List jobs |
| `speechmatics_get_job` | read | Get job |
| `speechmatics_get_transcript` | read | Get transcript |
| `speechmatics_get_job_log` | read | Get job log |
| `speechmatics_get_usage` | read | Get usage |
| `speechmatics_transcribe_url` | **write** | Transcribe url |
| `speechmatics_delete_job` | **write** | Delete job |
| `speechmatics_usage_status` | meta | Usage status (free-tier meter) |
| `speechmatics_upgrade` | meta | Upgrade to Pro (unlimited) |
| `speechmatics_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `speechmatics_upgrade` (it returns a Stripe Checkout link). Cancel any time with `speechmatics_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `speechmatics_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
