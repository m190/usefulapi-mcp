# fal.ai MCP by usefulapi

Run fal.ai models, poll the inference queue and read model schemas. Hosted, no local install.

**Live endpoint:** `https://falai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "falai": {
      "url": "https://falai.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **fal.ai credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `falai_list_models` | read | List models |
| `falai_get_model_schema` | read | Get model schema |
| `falai_get_request_status` | read | Get request status |
| `falai_get_request_result` | read | Get request result |
| `falai_submit_request` | **write** | Submit request |
| `falai_run_model` | **write** | Run model (subscribe) |
| `falai_cancel_request` | **write** | Cancel request |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
