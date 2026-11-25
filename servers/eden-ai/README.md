# Eden AI MCP by usefulapi

Use your [Eden AI](https://edenai.co) account from Claude, Cursor, or any MCP client. List LLM models and expert features, chat with an LLM, and run expert models such as OCR and moderation, which are billed to your account. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://eden-ai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://eden-ai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http eden-ai https://eden-ai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=eden-ai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Feden-ai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "eden-ai": {
      "url": "https://eden-ai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Eden AI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/eden-ai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Eden AI inference API key** that starts with sk-eden- (Eden AI dashboard → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `eden_ai_list_models` | read | List LLM models |
| `eden_ai_list_features` | read | List expert features |
| `eden_ai_get_feature` | read | Get expert feature details |
| `eden_ai_chat` | **write** | Chat with an LLM (billed) |
| `eden_ai_run_expert` | **write** | Run an expert model (billed) |
| `eden_ai_usage_status` | meta | Usage status (free-tier meter) |
| `eden_ai_request_feature` | meta | Request a missing feature |
| `eden_ai_upgrade` | meta | Upgrade to Pro or Pro+ |
| `eden_ai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `eden_ai_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `eden_ai_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `eden_ai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
