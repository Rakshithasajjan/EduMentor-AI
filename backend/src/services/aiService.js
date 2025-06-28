const { spawn } = require('child_process');
const path = require('path');

class AIService {
  constructor() {
    this.pythonPath = process.env.PYTHON_PATH || 'python3';
    this.scriptsPath = path.join(__dirname, '../../ai-models');
  }

  async getRecommendations(query) {
    return this._runPythonScript(
      'recommendation_engine.py', 
      ['recommend', query]
    );
  }

  async analyzeLearning(data) {
    return this._runPythonScript(
      'learning_analytics.py',
      ['analyze', JSON.stringify(data)]
    );
  }

  _runPythonScript(scriptName, args = []) {
    return new Promise((resolve, reject) => {
      const scriptPath = path.join(this.scriptsPath, scriptName);
      const pythonProcess = spawn(this.pythonPath, [scriptPath, ...args]);

      let result = '';
      let error = '';

      pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        error += data.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0 || error) {
          return reject(new Error(error || `Process exited with code ${code}`));
        }
        try {
          resolve(JSON.parse(result));
        } catch (e) {
          resolve(result);
        }
      });
    });
  }
}

module.exports = new AIService();