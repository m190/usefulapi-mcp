# Fireworks AI MCP by usefulapi

Inspect Fireworks AI models, deployments, datasets and fine-tuning jobs from Claude, Cursor, or any MCP client. Hosted, no local install — connect with your Fireworks API key.

**Live endpoint:** `https://fireworks.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/fireworks

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://fireworks.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http fireworks https://fireworks.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=fireworks&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffireworks.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "fireworks": {
      "url": "https://fireworks.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Fireworks AI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/fireworks/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your Fireworks API key. It's validated, stored per-user, and scoped to you.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fireworks_get_account` | read | Get account |
| `fireworks_list_models` | read | List models |
| `fireworks_get_model` | read | Get model |
| `fireworks_list_deployments` | read | List deployments |
| `fireworks_get_deployment` | read | Get deployment |
| `fireworks_list_deployed_models` | read | List deployed models |
| `fireworks_list_datasets` | read | List datasets |
| `fireworks_get_dataset` | read | Get dataset |
| `fireworks_list_fine_tuning_jobs` | read | List fine-tuning jobs |
| `fireworks_get_fine_tuning_job` | read | Get fine-tuning job |
| `fireworks_list_batch_inference_jobs` | read | List batch inference jobs |
| `fireworks_list_users` | read | List users |
| `fireworks_create_dataset` | **write** | Create dataset |
| `fireworks_delete_deployment` | **write** | Delete deployment |
| `fireworks_usage_status` | meta | Usage status (free-tier meter) |
| `fireworks_request_feature` | meta | Request a missing feature |
| `fireworks_upgrade` | meta | Upgrade to Pro (unlimited) |
| `fireworks_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `fireworks_upgrade` (it returns a Stripe Checkout link). Cancel any time with `fireworks_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `fireworks_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
