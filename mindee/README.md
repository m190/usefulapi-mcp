# Mindee MCP by usefulapi

Extract structured data from any document with Mindee, from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mindee API key.

**Live endpoint:** `https://mindee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mindee

## Add to Claude

```json
{
  "mcpServers": {
    "mindee": {
      "url": "https://mindee.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Mindee API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mindee_list_models` | read | List the extraction models on your account |
| `mindee_get_job` | read | Check the status of an enqueued document by job id |
| `mindee_get_inference` | read | Fetch the structured fields of a completed extraction |
| `mindee_extract_document` | **write** | Submit a PDF/image to a model and return typed fields (spends credits) |
| `mindee_usage_status` | meta | Your tier + usage this month |
| `mindee_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
