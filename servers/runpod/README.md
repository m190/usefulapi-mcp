# Runpod MCP by usefulapi

Use your [Runpod](https://www.runpod.io) account from Claude, Cursor, or any MCP client. Read Pods, Serverless endpoints, templates, GPU stock, billing and the audit log, and start, stop or terminate Pods. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://runpod.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://runpod.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http runpod https://runpod.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=runpod&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frunpod.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "runpod": {
      "url": "https://runpod.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Runpod credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/runpod/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Runpod API key** (Settings → API Keys in Runpod). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `runpod_get_account` | read | Get account |
| `runpod_get_account_limits` | read | Get account limits |
| `runpod_get_balance` | read | Get balance |
| `runpod_get_billing_history` | read | Get billing history |
| `runpod_get_pod_billing` | read | Get Pod billing |
| `runpod_list_pods` | read | List Pods |
| `runpod_get_pod` | read | Get a Pod |
| `runpod_set_pod_state` | **write** | Start or stop a Pod |
| `runpod_terminate_pod` | **write** | Terminate a Pod |
| `runpod_list_serverless_endpoints` | read | List Serverless endpoints |
| `runpod_get_serverless_endpoint` | read | Get a Serverless endpoint |
| `runpod_list_endpoint_workers` | read | List endpoint workers |
| `runpod_get_endpoint_request_metrics` | read | Get endpoint request metrics |
| `runpod_list_templates` | read | List templates |
| `runpod_get_template` | read | Get a template |
| `runpod_list_network_volumes` | read | List network volumes |
| `runpod_list_gpu_types` | read | List GPU types |
| `runpod_list_data_centers` | read | List data centers |
| `runpod_list_audit_logs` | read | List audit logs |
| `runpod_usage_status` | meta | Usage status (free-tier meter) |
| `runpod_request_feature` | meta | Request a missing feature |
| `runpod_upgrade` | meta | Upgrade to Pro or Pro+ |
| `runpod_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `runpod_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `runpod_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `runpod_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
