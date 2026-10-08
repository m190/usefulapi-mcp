# Together AI MCP by usefulapi

Use [Together AI](https://www.together.ai) from Claude, Cursor, or any MCP client — list models, run chat, embeddings and image generation, and manage fine-tuning jobs, batches and dedicated endpoints.
Hosted, no local install: connect with your own Together AI credentials.

**Live endpoint:** `https://together-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/together-ai

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://together-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http together-ai https://together-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=together-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ftogether-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "together-ai": {
      "url": "https://together-ai.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/together-ai/

<!-- connect:end (generated above, edit below) -->

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
| `together_ai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `together_ai_upgrade` (it returns a Stripe Checkout link). Cancel any time with `together_ai_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `together_ai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Together AI.
