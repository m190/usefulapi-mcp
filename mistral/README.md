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
| `mistral_list_models` | read | List base and fine-tuned models |
| `mistral_get_model` | read | Get one model's details |
| `mistral_list_files` | read | List uploaded files |
| `mistral_get_file` | read | Get file metadata |
| `mistral_get_file_url` | read | Get a temporary download URL for a file |
| `mistral_list_batch_jobs` | read | List batch inference jobs |
| `mistral_get_batch_job` | read | Get one batch job's status |
| `mistral_list_agents` | read | List agents |
| `mistral_get_agent` | read | Get one agent's configuration |
| `mistral_list_libraries` | read | List RAG document libraries |
| `mistral_get_library` | read | Get one library's details |
| `mistral_list_library_documents` | read | List documents in a library |
| `mistral_create_agent` | **write** | Create an agent with model, instructions and tools |
| `mistral_cancel_batch_job` | **write** | Cancel a running batch job |
| `mistral_delete_file` | **write** | Delete an uploaded file |
| `mistral_usage_status` | meta | Your tier + usage this month |
| `mistral_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
