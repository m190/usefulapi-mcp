# Speechmatics MCP by usefulapi

Transcribe audio and video with speaker diarization, translation, and summarization from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Speechmatics API key.

**Live endpoint:** `https://speechmatics.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/speechmatics

## Add to Claude

```json
{
  "mcpServers": {
    "speechmatics": {
      "url": "https://speechmatics.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
