# Together AI MCP by usefulapi

Use [Together AI](https://www.together.ai) from Claude, Cursor, or any MCP client — list models, run chat, embeddings and image generation, and manage fine-tuning jobs, batches and dedicated endpoints.
Hosted, no local install: connect with your own Together AI credentials.

**Live endpoint:** `https://together-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/together-ai

## Add to Claude

```json
{
  "mcpServers": {
    "together-ai": {
      "url": "https://together-ai.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Together AI API key** (Settings → API Keys).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `together_whoami` | read | Who am I |
| `together_list_models` | read | List models |
| `together_list_files` | read | List files |
| `together_get_file` | read | Get one file |
| `together_list_fine_tunes` | read | List fine-tuning jobs |
| `together_get_fine_tune` | read | Get one fine-tuning job |
| `together_list_fine_tune_events` | read | List a fine-tuning job's events |
| `together_list_batches` | read | List batch jobs |
| `together_get_batch` | read | Get one batch job |
| `together_list_endpoints` | read | List endpoints |
| `together_get_endpoint` | read | Get one endpoint |
| `together_list_hardware` | read | List hardware |
| `together_list_evaluations` | read | List evaluation jobs |
| `together_chat_completion` | **write** | Chat completion |
| `together_create_embeddings` | **write** | Create embeddings |
| `together_generate_image` | **write** | Generate an image |
| `together_create_fine_tune` | **write** | Create a fine-tuning job |
| `together_cancel_fine_tune` | **write** | Cancel a fine-tuning job |
| `together_create_batch` | **write** | Create a batch job |
| `together_cancel_batch` | **write** | Cancel a batch job |
| `together_create_endpoint` | **write** | Create a dedicated endpoint |
| `together_start_endpoint` | **write** | Start a dedicated endpoint |
| `together_stop_endpoint` | **write** | Stop a dedicated endpoint |
| `together_ai_usage_status` | meta | Usage status (free-tier meter) |
| `together_ai_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by Together AI.
