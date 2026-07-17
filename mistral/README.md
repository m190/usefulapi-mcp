# Mistral MCP by usefulapi

Manage your Mistral platform — models, files, batch jobs, agents and RAG libraries — from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Mistral API key.

**Live endpoint:** `https://mistral.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/mistral

## Add to Claude

```json
{
  "mcpServers": {
    "mistral": {
      "url": "https://mistral.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Mistral API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `mistral_list_models` | read | List models |
| `mistral_get_model` | read | Get a model |
| `mistral_list_files` | read | List files |
| `mistral_get_file` | read | Get a file |
| `mistral_get_file_url` | read | Get a file download URL |
| `mistral_list_batch_jobs` | read | List batch jobs |
| `mistral_get_batch_job` | read | Get a batch job |
| `mistral_list_agents` | read | List agents |
| `mistral_get_agent` | read | Get an agent |
| `mistral_list_libraries` | read | List document libraries |
| `mistral_get_library` | read | Get a document library |
| `mistral_list_library_documents` | read | List documents in a library |
| `mistral_create_agent` | **write** | Create an agent |
| `mistral_cancel_batch_job` | **write** | Cancel a batch job |
| `mistral_delete_file` | **write** | Delete a file |
| `mistral_usage_status` | meta | Usage status (free-tier meter) |
| `mistral_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
