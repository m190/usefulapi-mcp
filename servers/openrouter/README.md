# OpenRouter MCP by usefulapi

Use your [OpenRouter](https://openrouter.ai) account from Claude, Cursor, or any MCP client. Read your key, credits, API keys, guardrails, usage and the model catalog, with no write tools. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://openrouter.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://openrouter.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http openrouter https://openrouter.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=openrouter&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fopenrouter.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "openrouter": {
      "url": "https://openrouter.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your OpenRouter credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/openrouter/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **OpenRouter API key** (Settings → Keys in OpenRouter, starting with sk-or-v1-).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `openrouter_get_current_key` | read | Get the current API key |
| `openrouter_get_credits` | read | Get credit balance |
| `openrouter_get_activity` | read | Get activity by endpoint |
| `openrouter_list_keys` | read | List API keys |
| `openrouter_get_key` | read | Get an API key |
| `openrouter_list_guardrails` | read | List guardrails |
| `openrouter_get_guardrail` | read | Get a guardrail |
| `openrouter_get_generation` | read | Get generation metadata |
| `openrouter_get_generation_content` | read | Get stored generation content |
| `openrouter_list_models` | read | List models |
| `openrouter_list_models_for_account` | read | List models for this account |
| `openrouter_count_models` | read | Count models |
| `openrouter_get_model` | read | Get a model |
| `openrouter_list_model_endpoints` | read | List endpoints of a model |
| `openrouter_list_providers` | read | List providers |
| `openrouter_list_embedding_models` | read | List embedding models |
| `openrouter_usage_status` | meta | Usage status (free-tier meter) |
| `openrouter_request_feature` | meta | Request a missing feature |
| `openrouter_upgrade` | meta | Upgrade to Pro or Pro+ |
| `openrouter_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `openrouter_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `openrouter_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `openrouter_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
