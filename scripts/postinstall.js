const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

// Only build from source on Windows ARM64 (no prebuilts available)
if (process.platform === "win32" && process.arch === "arm64") {
  const binaryName = "mdpdf.win32-arm64-msvc.node";
  const binaryPath = path.join(ROOT, binaryName);

  if (!fs.existsSync(binaryPath)) {
    console.log("[mdpdf] No prebuilt binary for Windows ARM64");
    console.log("[mdpdf] Building from source (requires Rust toolchain)...");

    try {
      // Check if Rust is available
      execSync("rustc --version", { stdio: "pipe" });
    } catch {
      console.error("[mdpdf] ERROR: Rust toolchain not found.");
      console.error("[mdpdf] Install Rust from https://rustup.rs");
      process.exit(1);
    }

    try {
      // Use npx to fetch @napi-rs/cli on demand and build
      console.log("[mdpdf] Installing build tools and compiling...");
      execSync(
        "npx @napi-rs/cli@3.0.3 build --platform --release --features node --target aarch64-pc-windows-msvc",
        {
          cwd: ROOT,
          stdio: "inherit",
          env: { ...process.env, npm_config_yes: "true" },
        }
      );
      console.log("[mdpdf] Build complete!");
    } catch (e) {
      console.error("[mdpdf] Build failed:", e.message);
      process.exit(1);
    }
  }
}
