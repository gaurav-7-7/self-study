class desktop {
    String monitor, keyboard, mouse, speaker, ram, processor, motherBoard;
    public void setMonitor(String pMonitor){
        this.monitor = pMonitor;
    }
    public void setKeyboard(String pKeyboard){
        this.keyboard = pKeyboard;
    }
    public void setMouse(String pMouse){
        this.mouse =  pMouse;
    }
    public void setSpeaker(String pSpeaker){
        this.speaker = pSpeaker;
    }
    public void setRam(String pRam){
        this.ram = pRam;
    }
    public void setProcessor(String pProcessor){
        this.processor = pProcessor;
    }
    public void setMotherBoard(String pMotherBoard){
        this.motherBoard = pMotherBoard;
    }

    public void showSpecs() {
        System.out.println("Monitor " + monitor);
        System.out.println("Keyboard " + keyboard);
        System.out.println("Mouse " + mouse);
        System.out.println("Speaker " + speaker);
        System.out.println("Ram " + ram);
        System.out.println("Processor " + processor);
        System.out.println("Motherboard " + motherBoard);
    }

}
