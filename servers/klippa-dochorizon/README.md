# Doxis AI.dp (Klippa DocHorizon) MCP by usefulapi

Use [Doxis AI.dp (Klippa DocHorizon)](https://dochorizon.klippa.com) from Claude, Cursor, or any MCP client — document capture for invoices, receipts, identity documents and bank statements, plus a document toolkit and e-invoicing.
Hosted, no local install: connect with your own Doxis AI.dp (Klippa DocHorizon) credentials.

**Live endpoint:** `https://klippa-dochorizon.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/klippa-dochorizon

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://klippa-dochorizon.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http klippa-dochorizon https://klippa-dochorizon.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=klippa-dochorizon&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fklippa-dochorizon.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "klippa-dochorizon": {
      "url": "https://klippa-dochorizon.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Doxis AI.dp (Klippa DocHorizon) credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/klippa-dochorizon/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dochorizon_get_key_info` | read | Get API key info |
| `dochorizon_list_models` | read | List enabled capturing models |
| `dochorizon_list_configurations` | read | List capturing configurations |
| `dochorizon_get_model_schema` | read | Get a model's JSON schema |
| `dochorizon_list_prompt_configurations` | read | List Prompt Builder configurations |
| `dochorizon_get_prompt_schema` | read | Get a Prompt Builder JSON schema |
| `dochorizon_capture_financial` | **write** | Capture an invoice or receipt |
| `dochorizon_capture_identity` | **write** | Capture an identity document |
| `dochorizon_capture_bank_statement` | **write** | Capture a bank statement |
| `dochorizon_capture_salary_slip` | **write** | Capture a salary slip |
| `dochorizon_capture_generic` | **write** | Capture any document as key-values and tables |
| `dochorizon_capture_einvoice` | **write** | Capture a document as an e-invoice |
| `dochorizon_capture_with_prompt` | **write** | Capture with a Prompt Builder configuration |
| `dochorizon_submit_async_capture` | **write** | Submit a document for asynchronous capture |
| `dochorizon_list_async_jobs` | read | List asynchronous capture jobs |
| `dochorizon_get_async_job` | read | Get asynchronous job status |
| `dochorizon_get_async_job_result` | read | Get asynchronous job result |
| `dochorizon_get_async_job_logs` | read | Get asynchronous job logs |
| `dochorizon_delete_async_job` | **write** | Delete an asynchronous job |
| `dochorizon_document_info` | **write** | Get document info |
| `dochorizon_document_split` | **write** | Split a PDF |
| `dochorizon_document_render` | **write** | Render PDF pages as images |
| `dochorizon_document_merge` | **write** | Merge PDFs |
| `dochorizon_upload_file` | **write** | Upload a file to Doxis AI.dp storage |
| `dochorizon_download_file` | read | Download a stored file (small files only) |
| `dochorizon_validate_einvoice` | **write** | Validate an e-invoice |
| `dochorizon_convert_einvoice` | **write** | Convert an e-invoice to Universal Invoice JSON |
| `dochorizon_list_einvoice_types` | read | List e-invoice types |
| `dochorizon_search_peppol_directory` | read | Search the Peppol directory |
| `dochorizon_lookup_peppol_participant` | read | Look up a Peppol participant |
| `dochorizon_usage_status` | meta | Usage status (free-tier meter) |
| `dochorizon_request_feature` | meta | Request a missing feature |
| `dochorizon_upgrade` | meta | Upgrade to Pro (unlimited) |
| `dochorizon_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per project) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `dochorizon_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dochorizon_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dochorizon_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Doxis AI.dp (Klippa DocHorizon).
