# Fireworks AI MCP by usefulapi

Inspect Fireworks AI models, deployments, datasets and fine-tuning jobs from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Fireworks API key.

**Live endpoint:** `https://fireworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fireworks

## Add to Claude

```json
{
  "mcpServers": {
    "fireworks": {
      "url": "https://fireworks.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your Fireworks API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fireworks_get_account` | read | Get account info |
| `fireworks_list_models` | read | List models |
| `fireworks_get_model` | read | Get a model |
| `fireworks_list_deployments` | read | List deployments |
| `fireworks_get_deployment` | read | Get a deployment |
| `fireworks_list_deployed_models` | read | List deployed models |
| `fireworks_list_datasets` | read | List datasets |
| `fireworks_get_dataset` | read | Get a dataset |
| `fireworks_list_fine_tuning_jobs` | read | List fine-tuning jobs |
| `fireworks_get_fine_tuning_job` | read | Get a fine-tuning job |
| `fireworks_list_batch_inference_jobs` | read | List batch inference jobs |
| `fireworks_list_users` | read | List account users |
| `fireworks_create_dataset` | **write** | Create a dataset |
| `fireworks_delete_deployment` | **write** | Delete a deployment |
| `fireworks_usage_status` | meta | Your tier + usage this month |
| `fireworks_upgrade` | meta | Upgrade to Pro |

Read tools are annotated `readOnlyHint`; write tools are `destructiveHint` so clients confirm before mutating.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
