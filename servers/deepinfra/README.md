# DeepInfra MCP by usefulapi

Run DeepInfra inference, list models and read account rate limits. Hosted, no local install.

**Live endpoint:** `https://deepinfra.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "deepinfra": {
      "url": "https://deepinfra.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **DeepInfra credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `deepinfra_get_account` | read | Get account |
| `deepinfra_get_rate_limit` | read | Get rate limit |
| `deepinfra_list_api_tokens` | read | List API tokens |
| `deepinfra_get_usage` | read | Get usage |
| `deepinfra_get_usage_tokens` | read | Get token usage |
| `deepinfra_get_usage_rent` | read | Get GPU rental usage |
| `deepinfra_list_invoices` | read | List invoices |
| `deepinfra_list_deployments` | read | List deployments |
| `deepinfra_get_deployment` | read | Get deployment |
| `deepinfra_get_deployment_stats` | read | Get deployment stats |
| `deepinfra_get_gpu_availability` | read | Get GPU availability |
| `deepinfra_list_models` | read | List models |
| `deepinfra_get_model` | read | Get model |
| `deepinfra_get_hardware` | read | Get hardware |
| `deepinfra_query_logs` | read | Query logs |
| `deepinfra_get_live_metrics` | read | Get live metrics |
| `deepinfra_start_deployment` | **write** | Start deployment |
| `deepinfra_stop_deployment` | **write** | Stop deployment |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
