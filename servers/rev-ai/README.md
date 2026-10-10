# Rev.ai MCP by usefulapi

Use [Rev.ai](https://www.rev.ai) from Claude, Cursor, or any MCP client — speech-to-text jobs, transcripts, summaries and captions.
Hosted, no local install: connect with your own Rev.ai credentials.

**Live endpoint:** `https://rev-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/rev-ai

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rev-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rev-ai https://rev-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rev-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frev-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rev-ai": {
      "url": "https://rev-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rev.ai credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rev-ai/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `revai_get_account` | read | Get account and balance |
| `revai_list_jobs` | read | List transcription jobs |
| `revai_get_job` | read | Get job status |
| `revai_submit_job` | **write** | Submit transcription job |
| `revai_delete_job` | **write** | Delete job |
| `revai_get_transcript` | read | Get transcript |
| `revai_get_summary` | read | Get transcript summary |
| `revai_get_captions` | read | Get captions |
| `revai_usage_status` | meta | Usage status (free-tier meter) |
| `revai_request_feature` | meta | Request a missing feature |
| `revai_upgrade` | meta | Upgrade to Pro (unlimited) |
| `revai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `revai_upgrade` (it returns a Stripe Checkout link). Cancel any time with `revai_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `revai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Rev.ai.
